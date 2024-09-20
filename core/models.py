from django.db import models


class Instrument(models.Model):
    """Represents a musical instrument with a name, type, and description."""

    INSTRUMENT_TYPES = [
        ('SYNTH', 'Synthesizer'),
        ('SAMPLER', 'Sampler'),
        ('POLY_SYNTH', 'Polyphonic Synthesizer'),
    ]

    name = models.CharField(max_length=100)
    type = models.CharField(max_length=20, choices=INSTRUMENT_TYPES)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Sample(models.Model):
    """Represents an audio sample associated with an instrument."""

    instrument = models.ForeignKey(
        Instrument,
        related_name='samples',
        on_delete=models.CASCADE,
    )
    note = models.CharField(max_length=10)
    file = models.FileField(upload_to='samples/')
    duration = models.DurationField()

    def __str__(self):
        return f'{self.note} - {self.instrument.name}'


class AudioSetup(models.Model):
    """Represents an audio setup consisting of multiple instruments."""

    name = models.CharField(max_length=100)
    instruments = models.ManyToManyField(Instrument, related_name='setups')

    def __str__(self):
        return self.name

    def get_instrument_count(self):
        return self.instruments.count()
