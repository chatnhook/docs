##################
Mattermost
##################

| Add the **Incoming Webhooks** integration
|
| Use the following configuration under **Integration Settings**.
|
| **Channel**:  pick the channel to publish events to
|
|



Example config
-----------------

.. code-block:: yaml

  comms:
    mattermost:
      enabled: false
      webhook_url: 'mattermost_webhook_url'
      channel: 'test'
      bot_name: 'Bot'

Replace ``mattermost_webhook_url`` with your mattermost webhook url.


