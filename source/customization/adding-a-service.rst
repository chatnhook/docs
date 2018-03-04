##################
Adding a service
##################


Let's say, for example, you want to process hooks from a service called ``Foobar``.

1. Create a ``foobar`` folder inside the ``services`` folder


2. Inside it, create a file named ``foobar.py`` with the following contents:

.. code-block:: python

  from ..base import BaseService


  class FoobarService(BaseService):

      @property
      def event(self):
          return self.request.headers['X-GITHUB-EVENT']



3. Modify the ``event`` property as necessary to identify the the event sent by
   the service. Later you're gonna create a script to handle this event. Inside
   this class you have access to ``self.request`` and ``self.body`` to do whatever
   you want.
|
4. Still in the ``foobar`` folder, create a ``__init__.py`` with the following contents:  ``from .foobar import FoobarService``
