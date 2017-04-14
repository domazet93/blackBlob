from django import forms


class ContactForm(forms.Form):
    subject = forms.CharField(required=True)
    fullname = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    text = forms.CharField(required=True, widget=forms.Textarea)
