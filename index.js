var Cylon = require('cylon');

Cylon.robot({
    connections: {
        edison: {
            adaptor: 'intel-iot'
        }
    },
    devices: {
        relay: {
            driver: 'relay',
            pin: 2,
            type: "closed"
        }
    },

    work: function(my) {
        every((1).second(), function() {
            my.relay.toggle();
        });
    }
}).start();