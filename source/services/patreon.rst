##################
Patreon
##################

Go to here_.

In **Create a new webhook by pasting your URL here** enter the following: ``https://your.bot.url/<project>/patreon``.

| In this case the ``<project>/patreon`` tells chat 'n' hook that the webhooks are coming from patreon.
| The ``/<project>`` tells chat 'n' what project it is.
| **Make sure you have** ``/<project>/patreon`` **on the end of your url**
|

Example config
----------------

.. code-block:: yaml

  hooks:
    some-project:
      patreon:
        enabled: true
        scripts:
          pledges.create:
            - python /path/to/script.py
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



.. _here: https://www.patreon.com/portal/registration/register-webhooks