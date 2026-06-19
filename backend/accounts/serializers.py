from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirmPassword = serializers.CharField(write_only=True)

    phone = serializers.CharField(write_only=True, max_length=15)
    fullName = serializers.CharField(write_only=True, max_length=150)

    is_admin = serializers.BooleanField(
        write_only=True,
        required=False,
        default=False
    )

    class Meta:
        model = User
        fields = (
            'fullName',
            'email',
            'phone',
            'password',
            'confirmPassword',
            'is_admin'
        )

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise ValidationError("A user with this email already exists.")
        return value

    def validate(self, data):
        if data['password'] != data['confirmPassword']:
            raise serializers.ValidationError(
                {"password": "Passwords must match."}
            )
        return data

    def create(self, validated_data):
        is_admin = validated_data.pop('is_admin', False)

        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['fullName']
        )

        if is_admin:
            user.is_staff = True
            user.save()

        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        data["email"] = self.user.email
        data["username"] = self.user.username
        data["is_staff"] = self.user.is_staff
        data["is_superuser"] = self.user.is_superuser

        return data