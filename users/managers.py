from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('ایمیل الزامیه')

        if not username:
            raise ValueError('یوزرنیم الزامیه')

        if not password:
            raise ValueError('پسورد الزامیه')

        if len(password) < 8:
            raise ValueError('پسورد باید حداقل ۸ کاراکتر باشه')

        if len(password) > 256:
            raise ValueError('پسورد نباید بیشتر از ۲۵۶ کاراکتر باشه')

        email = self.normalize_email(email)

        user = self.model(
            email=email,
            username=username,
        )

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, username, password=None):
        user = self.create_user(
            email=email,
            username=username,
            password=password,
        )

        user.is_staff = True
        user.is_superuser = True
        user.save()

        return user