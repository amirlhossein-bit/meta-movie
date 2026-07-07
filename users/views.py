from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer


class RegisterView(generics.CreateAPIView):


    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
       
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        user = serializer.save()
        return Response(
            {
                'message': 'ثبت‌نام با موفقیت انجام شد',
                'email': user.email,
                'username': user.username,
            },
            status=status.HTTP_201_CREATED
        )