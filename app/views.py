from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from .forms import ContactForm
import json


@ensure_csrf_cookie
def index_view(request):

    return render(request, 'index.html', {})


@csrf_protect
def contact_view(request):

    if request.method == 'POST':

        body_unicode = request.body.decode('utf-8')
        data = json.loads(body_unicode)

        form = ContactForm(data)

        content = u'{}\n\n{}'.format(
            data['fullname'],
            data['text']
        )

        if form.is_valid():
            send_mail(
                data['subject'],
                content,
                data['email'],
                [settings.USER_EMAIL],
                fail_silently=False,
            )
            return HttpResponse(status=200)

        else:
            return HttpResponse(status=400)

    return render(request, 'index.html', {})
