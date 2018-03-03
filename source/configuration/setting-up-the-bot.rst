*************
Setting up the bot
*************

Configuring this bot is simple.
Copy ``config.example.yml`` to `config.yml`.

After that edit the file, below more information is given.

``global.bot_url`` - The bot url, this url will be used for creating redirects

The ``comms`` section allows you to set global configuration for that comm.
A comm is used to send information about a webhook.
For example, if you have configured **slack** and **telegram**, and Github would send a push event.
Then that event is published to slack and telegram.
The configuration options should be self-explaining, if not, feel free to open an issue.

The ``services`` section allows to set global configuration for that service.
For more details see :doc:`../services/index`.


The ``hooks`` section is where is real fun begins.
This holds all information that will send every webhook in to the right direction.

