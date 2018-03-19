##################
Authentication
##################

Chat 'n' Hook uses external providers to authenticate and authorize access to the web interface.
This is awesome, because users can re-use their Github / Google / Twitter / etc account when logging in.

Configuration
-------------
Without any auth providers the webinterface will be inaccessible.
This is done because of security reasons. Leaving the interface open, unprotected gives everyone the possibility to edit your configuration.
Therefore Chat 'n' Hook requires you to configure the auth before you can access the web interface.


Specifying auth providers is done in the ``auth`` section of the ``config.yaml``.
Below you can find some configuration examples for popular services.

.. contents:: :local:


Github authentication
----------------------
To authorize users to Chat 'n' Hook, add their username to the ``allowed_users``  list.

To make use of the Github login please follow those steps:

- Visit https://github.com/settings/applications/new
- Name your application
- Make sure the redirect url is ``https://<bot_domain>.com/admin/login/github/authorized``
- Click ``Register application``
- Copy the ``client_id`` and ``client_secret`` to your config.yml


.. code-block:: yaml

  auth:
    github:
      client_id:
      client_secret:
      allowed_users:
        - brantje
        - a-github-username


Google authentication
----------------------
To authorize users to Chat 'n' Hook, add their e-mail to the ``allowed_users` list.

Todo: steps to obtain ``client_id`` & ``secret`` (+ config redirect url)

.. code-block:: yaml

  auth:
    github:
      client_id: ''
      client_secret: ''
      allowed_users:
        - some_user@gmail.com
