FROM botpress/server:nightly-2021-06-24
ADD . /botpress
WORKDIR /botpress
CMD ["./bp"]