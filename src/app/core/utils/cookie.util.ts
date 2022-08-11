/*!
 cookie.util.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */



export function setCookie(name: string, value: string) {
  const date = new Date();

  //Set to expire in 7 days;
  date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000))

  //Set cookie
  document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}

export function getCookie(name: string) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');

  if (parts.length == 2) {
    return parts.pop()?.split(';').shift();
  }

  return null;
}

export function deleteCookie(name: string) {
  const date = new Date();

  //Set it to expire in -1 days
  date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

  //Set cookie
  document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
}
