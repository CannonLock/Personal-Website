async function get_json(url){
  let response = await fetch(url)
  let json = response.json()
  return json
}

export {
  get_json
}