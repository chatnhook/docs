##################
Slack
##################

Add the **Outgoing Webhooks** integration or click `here <https://my.slack.com/services/new/outgoing-webhook/>`_ to add it.

Use the following configuration under **Integration Settings**.

| **Channel**:  pick the channel you send webhooks from or use all.
| **Trigger word(s)**: Up to you
| **URL(s)**: ``https://your.bot.url/<project>/slack``
| **Token**: Recommend to use prefilled token.
|
| The rest is entirely up to you to configure (label, name, picture, etc)
|
| In this case the ``/slack`` tells chat 'n' hook that the webhooks are coming from Slack.
| The ``/<project>`` tells chat 'n' hook what project it is.
| **Make sure you have** ``/<project>/slack`` **on the end of your url**
|

Example config
--------------

.. code-block:: yaml

  hooks:
    some-project:
      slack:
        token: "your_outgoing_hook_token"
        scripts:
          message:
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


Replace ``your_outgoing_hook_token`` with the token.


