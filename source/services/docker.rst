##################
Docker
##################

| Login to the `Docker Hub <https://hub.docker.com/>`_.
| Pick the repo you want to add the webhook to.
| In the menu you see Webhooks, click on it.
| Enter a name and enter ``https://your.bot.url/<project>/docker`` as url.
|
| In this case the ``/docker`` tells chat 'n' hook that the webhooks are coming from Docker.
| The ``/<project>`` tells chat 'n' hook what project it is.
| **Make sure you have** ``/<project>/docker`` **on the end of your url**
|

Example config
--------------

.. code-block:: yaml

  hooks:
    some-project:
      docker:
        enabled: true
        scripts:
          push:
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