from django.contrib import admin

from .models import AudioSetup, Instrument, Sample


@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'description')
    search_fields = ('name', 'type')
    list_filter = ('type',)


@admin.register(Sample)
class SampleAdmin(admin.ModelAdmin):
    list_display = ('note', 'instrument', 'duration')
    search_fields = ('note', 'instrument__name')
    list_filter = ('instrument',)


@admin.register(AudioSetup)
class AudioSetupAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_instrument_count')
    search_fields = ('name',)
    filter_horizontal = ('instruments',)
