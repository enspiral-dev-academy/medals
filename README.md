# eda-grads

a grad has the following data

- links to profiles (github, linkedin, twitter, etc)
- photo
- profile

# blobs

upload a photo, or CV, sets on profile. 

# updates

just merge updates to the same key?
each edit is it's own log record,
and then the document is just a view on that.

# auth

simplest is to filter out updates before they go in.
but if you ever needed multimaster you'd store the auth in the database,
then you'd need signatures.

email someone a URL with a token in it, this adds a cookie
which is authorized, and that url is now disabled.

now, that cookie has those permissions, to log in again,
resend the email.

---

permissions are: if you are authorized as the owner of an email
then you can update the record where you are marked as the owner.
else

# upload

use XHR post so we can upload files directly without
dealing with multipart.

map arguments to query string and command name to path.
sync, async, and source should all use GET. sink can use POST.


---



## License

MIT


