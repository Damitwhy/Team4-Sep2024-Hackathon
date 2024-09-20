from django.shortcuts import render

# Create your views here.
def learn(request):
    # Define the keyboard keys for one octave
    keyboard_keys = {
        'C': 65, 'C#': 87, 'D': 83, 'D#': 69,
        'E': 68, 'F': 70, 'F#': 84, 'G': 71,
        'G#': 89, 'A': 72, 'A#': 85, 'B': 74 
    }

    # Create context dictionary with keys as values
    context = {'keys': keyboard_keys}

    return render(request, 'learn/learn.html', context)