##################
Slack
##################

| Add the **Incoming Webhooks** integration or click `here <https://my.slack.com/services/new/incoming-webhook/>`_ to add it.
|
| Use the following configuration under **Integration Settings**.
|
| **Channel**:  pick the channel to publish events to
|


Example config
-----------------

.. code-block:: yaml

  comms:
    slack:
      enabled: true
      hook_url: "slack_webhook_here"

Replace ``slack_webhook_here`` with your slack webhook url.


