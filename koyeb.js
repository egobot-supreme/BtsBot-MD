FROM fedora:37

RUN sudo dnf -y update &&\
    sudo dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm &&\
    sudo dnf install -y git ffmpeg ImageMagick nodejs libwebp &&\
    sudo dnf clean all -y

RUN git clone https://github.com/egobot-supreme/BtsBot-MD

WORKDIR /root/BtsBot-MD

COPY ./root/BtsBot-MD

CMD ["node", "index.js"]
