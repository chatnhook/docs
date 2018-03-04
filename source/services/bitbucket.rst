##################
Bitbucket
##################

Browse to the repository you want to add, and click on settings in the menu.

In the left menu choose **Webhooks**.
Then click on **Add webhook**.

| Under **URL** enter the following: ``https://your.bot.url/<project>/bitbucket``.
| In this case the ``/bitbucket`` tells chat 'n' hook that the webhooks are coming from bitbucket.
| The ``/<project>`` tells chat 'n' what project it is.

**Make sure you have** ``<project>/bitbucket``  **on the end of your url**


Last and final: **Triggers** -> **Choose from a full list of triggers** and select the events you want.

Last one, click **Save**

Example config
--------------

.. code-block:: yaml

  services:
    bitbucket:
      token: 'xxxxxxxx'

  hooks:
    <project>:
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


The `token` is used for api communication. You don't need to supply a token, but you will hit the rate limits of bitbucket quite fast.
