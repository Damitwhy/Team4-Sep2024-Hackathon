from django.shortcuts import render


# Create your views here.
def play(request):
     # Define the keyboard keys for one octave
    keyboard_keys = {
        'C': 'a', 'C#': 'w', 'D': 's', 'D#': 'e',
        'E': 'd', 'F': 'f', 'F#': 't', 'G': 'g',
        'G#': 'y', 'A': 'h', 'A#': 'u', 'B': 'j',
    }

    # Create context dictionary with keys as values
    context = {'keys': keyboard_keys}

    return render(request, 'learn/play.html', context)