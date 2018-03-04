##################
Scrutinizer
##################

Browse to the repository you want to add, and click on settings in the menu.

In the left menu choose **Service Hooks**.
Then click on **Add Web-Hook**.

| Under **URL** enter the following: ``https://your.bot.url/<project>/scrutinizer``.
|
| In this case the ``/scrutinizer`` tells chat 'n' hook that the webhooks are coming from Scrutinizer.
| The ``/<project>`` tells chat 'n' what project it is.
| **Make sure you have** ``/<project>/scrutinizer`` **on the end of your url**
|
Last one, click **Add Webhook**

Example config
--------------


.. code-block:: yaml

  hooks:
    <project>:
      scrutinizer:
        enabled: true
        events:
          - inspection.created
          - inspection.completed
          - inspection.canceled
          - inspection.failed
        notify_branches:
          - master
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


