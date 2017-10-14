/**
 * This module defines a custom jsDoc tag.
 * It allows you to document parameters with the @signature tag.
 * @module lib/typeSignature
 * @author Gabriele Romeo
 */

const options = {
  mustHaveValue: true,
  canHaveType: false,
  canHaveName: false,
  onTagged: function(doclet, tag) {
    doclet.signature = {
      definition: tag.value
        .replace(/->/, '&#8594;')
        .replace(/\*/, '<sup>*</sup>'),
    };
  },
};

exports.defineTags = function(dictionary) {
  dictionary.defineTag('signature', options);
};

const newDocletHandler = function(e) {
  const { signature } = e.doclet;
  if (signature) {
    e.doclet.description = e.doclet.description ? e.doclet.description : '';
    e.doclet.description += `
      <div style="font-size:.85em;
                  background-color: rgba(208, 208, 216, 0.17);
                  padding: 2px 10px">
        <h4>Function Type Signature</h4>
        <p style="font-weight: 700;
                  letter-spacing: 1.3px;
                  color: rgb(255, 0, 126);">
            ${signature.definition}
        </p>
      </div>`;
  }
};

exports.handlers = {
  newDoclet: function(e) {
    newDocletHandler(e);
  },
};
