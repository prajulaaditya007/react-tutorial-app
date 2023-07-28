#!/usr/bin/env python3

import json
import os
import sys


def read_package_version():
    with open("package.json") as f:
        data = json.load(f)
    return data.get("version")


def check_version_change():
    old_version = read_package_version()
    new_version = os.popen("git show HEAD:package.json").read()
    new_version = json.loads(new_version).get("version")

    if old_version != new_version:
        return True
    else:
        print("No changes to package version. Commit aborted.")
        return False


if __name__ == "__main__":
    if not check_version_change():
        sys.exit(1)
