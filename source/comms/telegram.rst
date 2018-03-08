##################
Telegram
##################


Requirements
------------

- NewBot with ID
- Channel ID

Create BOT
^^^^^^^^^^^
For this you need to make a Bot with BotFather see `BotFather <https://core.telegram.org/bots#6-botfather>`_.
If you made the bot you can copy the id Given by botfather and put it between the quotes at token inside config.yml.

Find Channel ID
^^^^^^^^^^^^^^^^
You need a channel ID of the channel you want the bot to report to, you can find a way to this at `Stackoverflow <https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id>`_.

Or if you did setup the :doc:`Telegram Service <../services/telegram>`. you can use the following command as admin: ``/chatid``

If you found the ID you can copy the id and put it between the quotes at channel inside config.yml.




Example global config
-----------------
If a service doesn't define a channel or token, then the global settings will be used.
Meaning, you can have different bots for different services / channels.

.. code-block:: yaml

  global:
    bot_url: "https://your.bot.url"
  comms:
    telegram:
      enabled: true
      token: "000000000:XXXXXXXXXXXXXXXXXXXXXXXX"
      channel: "-100000000"



