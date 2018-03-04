##################
Codacy
##################


| Browse to the repository you want to add, and click on settings in the menu.
|
| In the menu on top, click on **Integrations**
| Then click on **Add integration**.
|
A popup shows, click on **WebHook**.

| Under **Endpoint Address** enter the following: ``https://your.bot.url/<project>/codacy``.
|
| In this case the ``/codacy`` tells chat 'n' hook that the webhooks are coming from scrutinizer.
| The ``/<project>`` tells chat 'n' hook what project it is.
| **Make sure you have* ``/<project>/codacy`` on the end of your url**
|
Last one, click **Save**

Example config
--------------

.. code-block:: yaml

  hooks:
    <project>:
      codacy:
        enabled: true
        scripts:
          review_complete:
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

