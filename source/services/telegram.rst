##################
Telegram
##################
| Chat 'n' can be used as a Telegram bot.
| The bot is very extensible, you can add your own commands.
| For more information about adding commands see :doc:`../customization/adding-telegram-command`.
|

Requirements
--------------
- A domain
- A valid SSL certificate (Let's encrypt for example)
- A valid bot token
- Common sense

Example config
---------------

.. code-block:: yaml

  services:
    telegram:
      enabled: true
      server_key: '' # Only when using a custom ssl cert
      server_cert: '' # Only when using a custom ssl cert
      hostname: 'your.bot.url'
      port: 443
      permissions:
          admins:
              - username1
          moderators:
              - username2
      token: "xxxx:xxxx"
      plugins:
        giphy:
          apiKey: 'xxxx'

| Use ``server_key`` and ``server_cert`` only when you use an self signed certificate.
| Set ``hostname`` to your bots hostname.
| Under ``permissions`` add as many admins / moderators as you like.
| Paste your token under ``token``