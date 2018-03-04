##################
CircleCI
##################

| CircleCI supports sending webhooks when your build completes.
| More information can be found `here <https://circleci.com/docs/1.0/configuration/#notify>`_.
| Add the following to ``circle.yml``

.. code-block:: yaml

  notify:
    webhooks:
      - url:  https://your.bot.url/<project>/circleci

|
| In this case the ``/circleci`` tells chat 'n' hook that the webhooks are coming from CircleCI.
| The ``/<project>`` tells chat 'n' hook what project it is.
| **Make sure you have** ``/<project>/circleci`` **on the end of your url**
|
Example config
--------------

.. code-block:: yaml

  hooks:
    <project>:
      circleci:
        token: ''
        scripts:
          build_complete:
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
