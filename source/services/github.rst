*************
Github
*************

.. image:: https://i.imgur.com/RRO7Wqo.png

Browse to the repository you want to add, and click on settings in the menu.

In the left menu choose **Webhooks**.
Then click on **Add webhook**.

Under **Payload URL** enter the following: ``https://your.bot.url/github``.
In this case the ``/github`` tells chat 'n' hook that the webhooks are coming from github.
**Make sure you have** ``/github`` **on the end of your url**

After you've set the Payload url, set **Content type** to ``application/json``.
And if you like to protect your endpoint, you can enter a ``secret``.
Make sure to enter it in the config too.

Last and final: **Which events would you like to trigger this webhook?** select all events

Last one, click **Add webhook**

The github config looks like the following:


.. code-block:: yaml

  services:
    github:
      token: 'xxxxxxxx'

  hooks:
    some-project:
      github:
        enabled: true
        secret: ''
        token: ''
        scripts:
          push:
            - python /path/to/script.py
        notify_branches:
          - master
        disabled_events: # Allow all but those here
          - create
        notify_events: # Deny all but those here
          - push
          - commit_commment
          - watch
        send_to:
          telegram:
            enabled: true
            token: "xx:xxx"
            channels:
              - "-xxxxx"
          slack:
            enabled: false
            bot_name: 'Bot'
            webhooks:
              - 'https://hooks.slack.com/services/xxxx/xxxxx/xxxx'
          mattermost:
            enabled: false
            bot_name: 'Bot'
            webhooks:
              - 'https://mattermost.xxxxx.com/hooks/xxxx'
          discord:
            enabled: false
            bot_name: 'Bot'
            webhooks:
              - 'https://discordapp.com/api/webhooks/xxxx/xxxxxxx'


| **About the services.github config**
| The ``services.github.token`` is used for api communication.
| You don't need to supply a token, but you will hit the rate limits of github quite fast.
| You can generate a token here_, no need to check any checkboxes, public access is good enough.
|
| **About the hooks.<project>.github config**
| The ``secret`` is the secret key in the github webhook. For more info see above.

.. _here: https://github.com/settings/tokens