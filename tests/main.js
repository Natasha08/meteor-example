import assert from "assert";
import { expect } from 'chai';

describe("meteor-example", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    expect(name).to.equal("meteor-example");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      expect(Meteor.isServer).to.equal(false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      expect(Meteor.isClient).to.equal(false);
    });
  }
});
