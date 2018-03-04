##################
Discord
##################

1. Open your Server Settings Webhook tab:

.. image:: https://support.discordapp.com/hc/en-us/article_attachments/214602647/webhookTab.png

2. Click the green button to create a new webhook!

.. image:: https://support.discordapp.com/hc/en-us/article_attachments/214602667/pressButton.png

3. Enter the required information, for example:

.. image:: https://support.discordapp.com/hc/en-us/article_attachments/214526928/GrabURL.png

Use the url in ``Webhook URL`` for the bot.


Example config
-----------------

.. code-block:: yaml

  comms:
    discord:
      enabled: false
      hook_url: 'https://discordapp.com/api/webhooks/....../......'
      bot_name: 'Bot'
