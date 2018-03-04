##################
Adding a event
##################


Let's say, for example, you want to process hooks from a service called ``Foobar``.   
   
Inside the ``foobar`` folder, there is a folder called ``events`` (create if not exist).   
Inside it create a script with the name of an event that will be identified by the ``event`` property of the service class.   
For instance, let's say the ``Foobar`` service only sends one event: ``bark``.    
So you create ``bark.py`` with these contents:   

.. code-block:: python

  from ...base.events import BaseEvent


  class BarkEvent(BaseEvent):

      def process(self):
          return {'default': str(self.event)}



Modify the ``process`` method as desired. In the event class you have access
to the variables ``self.event``, ``self.body`` and ``self.request``. You need to return
a dict with **comm** names as keys, like ``telegram``, and the values are the messages
each **comm** will publish for that event. If you want the same message for all **comms**
that do not have a specific one, use the ``default`` key.