#########################
Adding telegram command
#########################

Let's say, for example, you want to add a command called ``Foobar``.   
   
Inside the ``services/telegram/commands`` folder, there is a folder called ``custom``.    
Create a new folder here, called ``foobar``.    
Inside the folder ``foobar`` create 2 files a script with the name of the command and a init file.    
So for example you create ``foobar.py`` with the following contents:   

.. code-block:: python

  # -*- coding: utf-8 -*-
  from __future__ import absolute_import
  from ...base import BaseCommand


  class FoobarCommand(BaseCommand):
      def get_description(self):
          return "Foo.....bar!"

      def run(self, messageObj, config):
          self.send_message(chat_id=messageObj.get('chat').get('id'),
                text='Foobar')


And a file called ``__init__.py`` wich is empty.

Each command file needs to have 2 functions: **run** and **get_description**.   
``run()`` will be ran when the command is called and ``get_description()`` is called when the command ``/start`` is ran.   
 
In the command class you have access to the following variables / functions
-  ``messageObj`` - Telegram message object, see below
- ``self.send_message()``, ``self.send_document()``, ``self.send_photo()``  are aliases to the functions in ``self.telegram_bot``
- ``self.telegram_bot``- is an instance of `python-telegram-bot <https://github.com/python-telegram-bot/python-telegram-bot>`_.
   
   
``messageObj`` is a telegram message object, which looks like the following:

.. code-block:: json

  {
     "date":1441645532,
     "chat":{
        "last_name":"Test Lastname",
        "id":1111111,
        "type":"private",
        "first_name":"Test Firstname",
        "username":"Testusername"
     },
     "message_id":1365,
     "from":{
        "last_name":"Test Lastname",
        "id":1111111,
        "first_name":"Test Firstname",
        "username":"Testusername"
     },
     "text":"/testing 1 2 3",
     "command":"testing",
     "args":[
        "1",
        "2",
        "3"
     ]
  }