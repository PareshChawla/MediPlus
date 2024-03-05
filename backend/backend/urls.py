from django.contrib import admin
from django.urls import path
from app import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/submit-form/",
        views.submit_form,
        name="patient_create_view",
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
