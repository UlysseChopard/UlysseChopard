defmodule KV.BucketTest do
    use ExUnit.Case, async: true

    setup do
        {:ok, bucket} = KV.Bucket.start_link([])
        %{bucket: bucket}
    end

    test "stores values by key", %{bucket: bucket} do
        {:ok, bucket} = KV.Bucket.start_link([])
        assert KV.Bucket.get(bucket, "milk") == nil

        KV.Bucket.put(bucket, "milk", 3)
        assert KV.Bucket.get(bucket, "milk") == 3

        value = KV.Bucket.delete(bucket, "milk")
        assert value == 3
        assert KV.Bucket.get(bucket, "milk") == nil
    end

    test "are temporary workers" do
        assert Supervisor.child_spec(KV.Bucket, []).restart == :temporary
    end
end