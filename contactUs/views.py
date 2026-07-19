from django.core.mail import send_mail
from django.conf import settings
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import ContactMessageSerializer


class ContactMessageView(generics.CreateAPIView):
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact_message = serializer.save()
        send_mail(
            subject=f'پیام جدید از فرم تماس: {contact_message.subject}',
            message=(
                f'نام: {contact_message.name}\n'
                f'ایمیل: {contact_message.email}\n\n'
                f'پیام:\n{contact_message.message}'
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_EMAIL_RECEIVER],
            fail_silently=True,
        )

        return Response(
            {'message': 'پیام شما با موفقیت ارسال شد'},
            status=status.HTTP_201_CREATED,
        )