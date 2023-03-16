#!/bin/sh
sed 's/^.*$/\*:\/\/\0\/*/g' domains.txt > domains_uBlacklist.txt

