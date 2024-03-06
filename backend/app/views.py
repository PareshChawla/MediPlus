# from django.shortcuts import render
# from django.http import JsonResponse
# from .models import Patient
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers
from app.models import Patient
from rest_framework.decorators import api_view

# def submit_form(request):
#     if request.method == 'POST':
#         patient = Patient(
#             name=request.POST.get('name'),
#             email=request.POST.get('email'),
#             phone=request.POST.get('tel'),
#             city=request.POST.get('city'),
#             address=request.POST.get('address'),
#             medicine=request.POST.get('medicine'),
#             prescription=request.FILES.get('prescription'),
#             definition=request.POST.get('definition')
#         )
#         patient.save()
#         return JsonResponse({'message': 'Form submitted successfully'})
#     else:
#         return JsonResponse({'message': 'Invalid request method'}, status=400)

# For Deserialization purpose
# for making JSON Data to Python Data - by Thouseef (Remove this comment after reviewing)
class PatientCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = (
            "name",
            "email",
            "phone",
            "city",
            "address",
            "medicine",
            "prescription",
            "definition",
        )


@api_view(["POST"])
def submit_form(request, format=None):
    if request.method == "POST":
        serializer = PatientCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Form Submitted Successfully"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
