setup-travis-environment:
	chmod -R +x .travis-ci/
	chmod -R +x mobile/scripts/
	.travis-ci/restore-secrets.sh

mobile_%:
	$(MAKE) -C mobile $*

domain_%:
	$(MAKE) -C domain $*

backend_%:
	$(MAKE) -C backend $*

web_%:
	$(MAKE) -C web $*