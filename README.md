# enspiral dev academy grads

# node version

This project uses node v 5.6 - be sure to be using 5.6 before running `npm intstall`. If using nvm use the command below to change automatically as per the .nvmrc file. 
```bash
nvm use
```


# running

```bash
git clone git@github.com:enspiral-dev-academy/grads.git
cd grads
npm install
npm run build
npm start
# open localhost:8000 in your favorite browser.

```

## authorization

Authorization uses "cookies". Cookies are something delicious you eat,
so it really doesn't make any sense to call things used for authentication
"cookies", especially when those things behave a lot like a familiar ticket
and ticket stub, as is familiar to people who have ridden a bus or gone to
the movies.

first a "ticket" is created. this is a high entropy (unguessable) token.
```bash
node index.js auth.create <resource>
1d67c0e114b10dc9cc96ea9cd2966f76c42539db
```
in this case, `<resource>` should probably be an email address.
this token would be emailed to the user, embedded in a link back to the server.

`http://localhost:8000/redeem/1d67c0e114b10dc9cc96ea9cd2966f76c42539db`
the server creates a cookie and sends it to you in the response,
which is also a redirect to the rest of the app (though it could easily
be a redirect to edit your newly created profile)

This is exactly like tearing off the ticket and givening you back the ticket
stub when you enter the theater. Possession of the ticket stub shows you are
authorized to see the movie.

To can test this using `curl`

```bash
curl localhost:8000/redeem/1d67c0e114b10dc9cc96ea9cd2966f76c42539db -c jar -b jar -v
*   Trying 127.0.0.1...
* Connected to localhost (127.0.0.1) port 8000 (#0)
> GET /redeem/1d67c0e114b10dc9cc96ea9cd2966f76c42539db HTTP/1.1
> Host: localhost:8000
> User-Agent: curl/7.43.0
> Accept: */*
> 
< HTTP/1.1 200 OK
* Replaced cookie cookie="437734b0886caf51a8961b1033abb392b07333c1" for domain localhost, path /, expire 1491397335
< Set-Cookie: cookie=437734b0886caf51a8961b1033abb392b07333c1;Path=/;Expires=Wed Apr 05 2017 13:02:15 GMT+1200 (NZST)FirstPartyOnly;HttpOnly;
< Location: /
< Date: Tue, 05 Apr 2016 01:02:15 GMT
< Connection: keep-alive
< Content-Length: 0
< 
* Connection #0 to host localhost left intact
```

note that `curl` can be quite finnecky about using cookies
and to both write and read cookies you need to use `-c jar -b jar`
arguments where `jar` is the "cookie jar"

## Notes

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








