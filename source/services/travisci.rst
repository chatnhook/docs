##################
TravisCI
##################

| TravisCI supports sending webhooks when your build completes.
| More information can be found `here <https://docs.travis-ci.com/user/notifications/#Configuring-webhook-notifications>`_
|
|

Add the following to `.travis.yml`

.. code-block:: yaml

  notifications:
    webhooks: https://your.bot.url/<project>/travis



| In this case the ``/travis`` tells chat 'n' hook that the webhooks are coming from Travis.
| The ``/<project>`` tells chat 'n' hook what project it is.
| **Make sure you have** ``/<project>/travis`` **on the end of your url**
|

Example config
--------------


.. code-block:: yaml

  hooks:
    <project>:
      docker:
        enabled: true
        scripts:
          build:
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
