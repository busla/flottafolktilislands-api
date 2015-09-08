FROM ubuntu:14.04
# Let the conatiner know that there is no tty
# Avoid ERROR: invoke-rc.d: policy-rc.d denied execution of start.
RUN echo "#!/bin/sh\nexit 0" > /usr/sbin/policy-rc.d

RUN DEBIAN_FRONTEND=noninteractive sudo apt-get update \
    && sudo apt-get install --yes curl \
    && sudo apt-get install --yes -f build-essential \
    && curl -sL https://deb.nodesource.com/setup | sudo bash - \
    && sudo apt-get install --yes -f nodejs \

    && sudo apt-get --yes install git \
    && sudo apt-get --yes install python \

    #Set the new python path
    && export PYTHONPATH="${PYTHONPATH}:/usr/bin" \

    && sudo npm install --unsafe-perm -g sails \


EXPOSE 1337

