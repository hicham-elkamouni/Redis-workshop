# REDIS

- sudo apt-get install redis
- redis-server
- redis-cli

---

---

- basic **commands :**
    - set “key” “value”
    - get “key”
    - DEL “key”
    - exists “key” ⇒ return 0 or 1
    - KEYS * ⇒ list all stored keys
    - flushall ⇒ delete all
- advanced **commands :**
    - ttl name ⇒ -1 means that has no expiration , -2 has expired
    - expire “key” “secondes” ⇒ expire name hicham
    - setex  “key” “seconds” “value” ⇒ setex name 10 hicham

LIST :

- lpush “key” “value” ⇒ lpush youcode hicham ( l on left ⇒ start)
- rpush “key” “value” ⇒ lpush youcode hicham ( r on right ⇒ end )
- LPOP , RPOP ⇒ for deleting an element from array

UNIQUE LIST :

- SADD “key” “values” ⇒ add element to list
- SMEMBERS “key” ⇒ show list elements
- SREM “key” “value” ⇒ remove an element from list

HASH : ( hashes are collections of field-values pairs )

- HSET palyer name hicham age 24
- HGET player name ( retrieves selected fields )
- HGETALL player ( retrieves all fields )
- HEXISTS player name (return 1 if true , 0 if false)