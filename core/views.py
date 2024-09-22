from django.shortcuts import render
from .models import Contributor

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def piano(request):
    return render(request, 'core/piano.html')

def about(request):
    contributors = Contributor.objects.all()
    return render(request, 'core/about.html', {'contributors': contributors})