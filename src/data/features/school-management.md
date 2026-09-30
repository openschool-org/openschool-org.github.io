---
title: School Management
icon: Building2
order: 1
group: foundation
homeFeatured: true
summary: The school profile and the first-run Setup wizard that gets a fresh instance from empty to operational.
---

- Guided School Setup wizard: school details → houses → grades → classes → mediums
- Resumable and idempotent - blocks the rest of the app until the school record and grade range exist
- One authoritative school profile: name, address, phone, email, inline logo
- Editable grade range (1-13) the school runs
- School type (boys / girls / mixed), enforced against student gender at create/update time
