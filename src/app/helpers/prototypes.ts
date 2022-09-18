String.prototype.replaceParamsInUrl = function (id: string) {
  let word = String(this);

  return word.replace(/{{id}}/g, id);
};
