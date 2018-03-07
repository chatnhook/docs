##################
Zabbix
##################

Chat 'n' hook has the ability to receive reports from `Zabbix <https://www.zabbix.com/>`_.

To receive hooks from zabbix you need to install the `Chat 'n' Hook <https://github.com/chatnhook/zabbix-alertscript>`_ script and configure it.

Example config
--------------

.. code-block:: yaml

  hooks:
    <project>:
      zabbix:
        scripts:
          issue:
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





