from django.db import models


# Model to represent a musical instrument (e.g., Synthesizers, Samplers)
class Instrument(models.Model):
    name = models.CharField(max_length=100)  # Instrument name
    type = models.CharField(
        max_length=100,
        choices=[
            ('Synth', 'Synthesizer'),
            ('Sampler', 'Sampler'),
            ('PolySynth', 'Polyphonic Synthesizer'),
        ],
    )  # Instrument type (synth, sampler, etc.)
    description = models.TextField()  # Description of the instrument

    def __str__(self):
        return self.name


# Model to represent a sample (e.g., audio file)
class Sample(models.Model):
    instrument = models.ForeignKey(
        Instrument, related_name='samples', on_delete=models.CASCADE
    )
    note = models.CharField(max_length=10)  # Note (e.g., C4, D#2)
    file = models.FileField(upload_to='samples/')  # Audio file
    duration = models.FloatField()  # Duration in seconds

    def __str__(self):
        return f'{self.note} sample for {self.instrument.name}'


# Model to represent an audio setup where instruments and effects are connected
class AudioSetup(models.Model):
    name = models.CharField(max_length=100)  # Name of the setup
    instruments = models.ManyToManyField(
        Instrument
    )  # Instruments used in the setup

    def __str__(self):
        return self.name
