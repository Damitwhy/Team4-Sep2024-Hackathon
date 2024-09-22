from django.contrib import admin
from django.utils.html import format_html

from .models import AudioSetup, Instrument, Sample, Contributor


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

@admin.register(Contributor)
class ContributorAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'description', 'profile_picture')
    search_fields = ('name', 'title')
