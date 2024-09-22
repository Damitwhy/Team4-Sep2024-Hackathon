from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def piano(request):
    return render(request, 'core/piano.html')

def about(request):
    return render(request, 'core/about.html')    

def learn(request):
    return render(request, 'core/learn.html')      